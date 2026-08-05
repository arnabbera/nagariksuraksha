import Header from "../components/Header";

import Button from "../../../shared/ui/Button";
import Card from "../../../shared/ui/Card";
import Container from "../../../shared/ui/Container";
import Heading from "../../../shared/ui/Heading";
import Section from "../../../shared/ui/Section";

export default function HomePage() {
  return (
    <>
      <Header />

      <Section className="bg-slate-100">
        <Container>
          <Heading
            title="Welcome to NagarikSuraksha"
            subtitle="Legal Services • Legal Education • Certification"
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Card>
              <h3 className="text-xl font-semibold">Legal Services</h3>
              <p className="mt-2 text-slate-600">
                Professional legal guidance for citizens.
              </p>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold">LL.B Learning</h3>
              <p className="mt-2 text-slate-600">
                Structured learning with notes, videos and quizzes.
              </p>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold">Certification</h3>
              <p className="mt-2 text-slate-600">
                Complete courses and earn certificates.
              </p>
            </Card>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button>Student Login</Button>
            <Button variant="outline">Explore Courses</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}