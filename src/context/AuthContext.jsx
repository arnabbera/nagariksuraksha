import {
  createContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  loginWithGoogle,
  logoutUser,
  subscribeToAuthentication,
} from "../services/authService";
import { userRepository } from "../repositories/UserRepository";
import {
  updateStudentProfile,
} from "../services/studentProfileService";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [firebaseUser, setFirebaseUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState("");

  useEffect(() => {
    const unsubscribe = subscribeToAuthentication(
      async (authenticatedUser) => {
        try {
          setLoading(true);
          setAuthError("");
          setFirebaseUser(authenticatedUser);

          if (!authenticatedUser) {
            setProfile(null);
            return;
          }

          const userProfile =
            await userRepository.getByUid(
              authenticatedUser.uid,
            );

          setProfile(userProfile);
        } catch (error) {
          console.error("Authentication state error:", error);
          setAuthError(
            "Unable to load your account information.",
          );
          setProfile(null);
        } finally {
          setLoading(false);
        }
      },
    );

    return unsubscribe;
  }, []);

  const signIn = async () => {
    try {
      setLoading(true);
      setAuthError("");

      const result = await loginWithGoogle();

      setFirebaseUser(result.firebaseUser);
      setProfile(result.profile);

      return result;
    } catch (error) {
      console.error("Google sign-in failed:", error);
      setAuthError(
        error?.message ||
          "Google sign-in failed. Please try again.",
      );
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setLoading(true);
      setAuthError("");

      await logoutUser();

      setFirebaseUser(null);
      setProfile(null);
    } catch (error) {
      console.error("Logout failed:", error);
      setAuthError(
        error?.message ||
          "Logout failed. Please try again.",
      );
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const saveProfile = async ({
    displayName,
    photoFile = null,
  }) => {
    if (!firebaseUser) {
      throw new Error(
        "You must be signed in to update your profile.",
      );
    }

    const updatedProfile =
      await updateStudentProfile({
        firebaseUser,
        displayName,
        currentPhotoURL:
          profile?.photoURL ||
          firebaseUser.photoURL ||
          "",
        photoFile,
      });

    setProfile(
      updatedProfile,
    );

    setFirebaseUser(
      firebaseUser,
    );

    return updatedProfile;
  };

  const refreshProfile = async () => {
    if (!firebaseUser?.uid) {
      setProfile(null);
      return null;
    }

    const refreshedProfile =
      await userRepository.getByUid(
        firebaseUser.uid,
      );

    setProfile(refreshedProfile);

    return refreshedProfile;
  };

  const value = useMemo(
    () => ({
      firebaseUser,
      profile,
      loading,
      authError,

      isAuthenticated: Boolean(firebaseUser),
      role: profile?.role || null,
      enrollmentId: profile?.enrollmentId || null,

      signIn,
      signOut,
      saveProfile,
      refreshProfile,
    }),
    [
      firebaseUser,
      profile,
      loading,
      authError,
    ],
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}