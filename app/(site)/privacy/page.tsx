import Container from "@/components/layout/Container";

export default function PrivacyPolicyPage() { // Renamed from PrivacyPage for consistency
  return (
    <Container className="textual-page">
      {/* Back button added here */}
      <div className="mb-10 text-left">
        <a
          href="/"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          &larr; Back to home
        </a>
      </div>

      <div className="mx-auto mb-20 max-w-[500px] text-center">
        <h1 className="mb-7 text-4xl font-bold">Privacy policy</h1>
        <p className="text-xl leading-9">
          We are committed to your privacy and protecting your personal data
        </p>
      </div>

      <div className="mb-20">
        <p>
          This Privacy Policy explains how we collect, use, disclose, and
          safeguard your information when you use our subscription-based app.
          Please read this privacy policy carefully. If you do not agree with
          the terms of this privacy policy, please do not access the service.
        </p>
      </div>

      <div className="mb-20">
        <h2>
          <small>Section 1</small>
          <br />
          Information We Collect
        </h2>

        <p>
          We may collect information about you in a variety of ways. The
          information we may collect via the service includes:
        </p>

        <ul className="terms"> {/* Added 'terms' class for consistency */}
          <li>
            <strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping
            address, email address, and telephone number, and demographic
            information, such as your age, gender, hometown, and interests, that
            you voluntarily give to us when you register with the service or
            when you choose to participate in various activities related to the
            service, such as online chat and message boards.
          </li>
          <li>
            <strong>Financial Data (via Paddle):</strong> For processing
            payments, we use Paddle.com as our Merchant of Record. This means
            Paddle handles your payment information directly. When you make a
            purchase, Paddle collects your payment details (e.g., credit card
            number, expiration date) and billing information (e.g., name,
            address, email). We do not directly store or process your sensitive
            payment card information on our servers. Paddle's collection and
            processing of your data are governed by their own Privacy Policy,
            which we encourage you to review:{" "}
            <a
              href="https://paddle.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://paddle.com/privacy
            </a>
            .
          </li>
          <li>
            <strong>Derivative Data:</strong> Information our servers
            automatically collect when you access the App, such as your IP
            address, your browser type, your operating
            system, your access times, and the pages you have viewed directly
            before and after accessing the service.
          </li>
          <li>
            <strong>Device Data:</strong> Device information, such as your mobile device ID, model, and
            manufacturer, and information about the location of your device if
            you access the service from a mobile device.
          </li>
        </ul>
      </div>

      <div className="mb-20">
        <h2>
          <small>Section 2</small>
          <br />
          Use of Your Information
        </h2>

        <p>
          Having accurate information about you permits us to provide you with a
          smooth, efficient, and customized experience. Specifically, we may use
          information collected about you via the service to:
        </p>

        <ul className="terms"> {/* Added 'terms' class for consistency */}
          <li>Create and manage your account.</li>
          <li>
            Process your transactions and send you related information,
            including purchase confirmations and invoices.
          </li>
          <li>
            Send you technical notices, updates, security alerts, and support and administrative messages.
          </li>
          <li>
            Respond to your comments, questions, and requests and provide
            customer service.
          </li>
          <li>
            Communicate with you about products, services, offers,
            promotions, rewards, and events offered by us and others.
          </li>
          <li>
            Monitor and analyze trends, usage, and activities in connection with our App.
          </li>
          <li>
            Personalize and improve the service and provide advertisements,
            content, or features that match user profiles or interests.
          </li>
          <li>Facilitate transactions and payments.</li>
          <li>
            Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.
          </li>
        </ul>
      </div>

      <div className="mb-20">
        <h2>
          <small>Section 3</small>
          <br />
          Disclosure of Your Information
        </h2>

        <p>
          We may share information we have collected about you in certain
          situations. Your information may be disclosed as follows:
        </p>

        <ul className="terms"> {/* Added 'terms' class for consistency */}
          <li>
            <strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to
            respond to legal process, to investigate or remedy potential
            violations of our policies, or to protect the rights, property, and
            safety of others, we may share your information as permitted or
            required by any applicable law, rule, or regulation.
          </li>
          <li>
            <strong>Business Transfers:</strong> We may share or transfer your information in connection with, or
            during negotiations of, any merger, sale of company assets,
            financing, or acquisition of all or a portion of our business to
            another company.
          </li>
          <li>
            <strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform
            services for us or on our behalf, including payment processing (specifically Paddle), data
            analysis, email delivery, hosting services, customer service, and
            marketing assistance.
          </li>
          <li>
            <strong>Marketing Communications:</strong> With your consent, or with an opportunity for you to withdraw
            consent, we may share your information with third parties for
            marketing purposes, as permitted by law.
          </li>
        </ul>
      </div>

      <div className="mb-20">
        <h2>
          <small>Section 4</small>
          <br />
          Security of Your Information
        </h2>

        <p>
          We use administrative, technical, and physical security measures to
          help protect your personal information. While we have taken reasonable
          steps to secure the personal information you provide to us, please be
          aware that despite our efforts, no security measures are perfect or
          impenetrable, and no method of data transmission can be guaranteed
          against any interception or other types of misuse.
        </p>
      </div>
      <p>Last change - July 2024</p>
    </Container>
  );
}
