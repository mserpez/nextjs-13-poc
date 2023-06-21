import ContactForm from "./form";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center p-24">
      Contact Page
      <div className="mt-24 w-1/2 max-w-xl">
        <ContactForm />
      </div>
    </div>
  );
}
