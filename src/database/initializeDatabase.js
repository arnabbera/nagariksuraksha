import { seedCategories } from "./seedCategories";
import { seedKeywordGroups } from "./seedKeywordGroups";
import { seedHomepage } from "./seedHomepage";
import { seedSettings } from "./seedSettings";
import { seedCourses } from "./seedCourses";
import { seedRoles } from "./seedRoles";
import { seedMenus } from "./seedMenus";
import { seedFooter } from "./seedFooter";
import { seedNotifications } from "./seedNotifications";

export async function initializeDatabase() {
  console.log("====================================");
  console.log("NagarikSuraksha Database Installer");
  console.log("====================================");

  await seedSettings();
  console.log("✔ Settings Created");

  await seedHomepage();
  console.log("✔ Homepage Created");

  await seedCategories();
  console.log("✔ Categories Created");

  await seedKeywordGroups();
  console.log("✔ Keyword Groups Created");

  await seedCourses();
  console.log("✔ Courses Created");

  await seedRoles();
  console.log("✔ Roles Created");

  await seedMenus();
  console.log("✔ Menus Created");

  await seedFooter();
  console.log("✔ Footer Created");

  await seedNotifications();
  console.log("✔ Notifications Created");

  console.log("====================================");
  console.log("Database Initialization Completed");
  console.log("====================================");
}