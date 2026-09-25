import Seo from "../components/Seo";
import Button from "../components/Button";
import Reveal from "../components/Reveal";

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" description="The page you're looking for doesn't exist." path="/404" />
      <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-40 text-center">
        <Reveal direction="up">
          <span className="font-body text-xs font-medium uppercase tracking-[0.28em] text-champagne">404</span>
        </Reveal>
        <Reveal direction="up" delay={0.1}>
          <h1 className="mt-5 font-heading text-4xl text-navy lg:text-6xl">Page not found</h1>
        </Reveal>
        <Reveal direction="up" delay={0.2}>
          <p className="mt-5 max-w-md font-body text-base text-gray">
            The page you're looking for doesn't exist or may have moved.
          </p>
        </Reveal>
        <Reveal direction="up" delay={0.3} className="mt-8">
          <Button to="/">Back to Home</Button>
        </Reveal>
      </section>
    </>
  );
}