import data from "../../config.json";

const contactData = data.pt.contact;

export const ContactForm = ({ form, handler }) => {
  return (
    <ContactBody>
      <form ref={form} onSubmit={handler}>
        <ContactInputEmail />
        <ContactInputMessage />
        <ContactFormButton />
      </form>
    </ContactBody>
  );
};

const ContactBody = ({ children }) => {
  return (
    <div className="max-w-[1000px] mx-auto w-full">
      <div className="bg-white text-black dark:bg-warm-gray-700 dark:text-white rounded-md shadow-md p-4 text-left">
        {children}
      </div>
    </div>
  );
};

const ContactInputEmail = () => {
  return (
    <div className="relative p-2">
      <label
        htmlFor="message"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {contactData.text_email}
      </label>
      <div className="flex absolute inset-y-0 left-0 items-center pl-5 pt-7 pointer-events-none">
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-gray-500 dark:text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
        </svg>
      </div>
      <input
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-warm-gray-800 dark:border-warm-gray-600 dark:placeholder-warm-gray-300 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={contactData.text_email_input}
        name="email"
        id="email"
      />
    </div>
  );
};

const ContactInputMessage = () => {
  return (
    <div className="p-2">
      <label
        htmlFor="message"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {contactData.text_message}
      </label>
      <textarea
        rows="6"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-warm-gray-800 dark:border-warm-gray-600 dark:placeholder-warm-gray-300 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={contactData.text_message_input}
        name="message"
        id="message"
      ></textarea>
    </div>
  );
};

const ContactFormButton = () => {
  return (
    <div className="flex justify-between mt-2">
      <div id="emailStatus"></div>
      <button
        type="submit"
        className="rounded-md bg-blue-500 hover:bg-blue-600 duration-100 text-white p-3 m-2"
      >
        <div className="flex items-center justify-center">
          <svg
            className="fill-white w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z" />
          </svg>
          <span className="hidden sm:block">{contactData.text_send_email}</span>
        </div>
      </button>
    </div>
  );
};
