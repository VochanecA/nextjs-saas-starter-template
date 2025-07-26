import Container from "@/components/layout/Container";

export default function RefundPolicyPage() {
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
        <h1 className="mb-7 text-4xl font-bold">Refund Policy</h1>
      </div>

      <div className="mb-20">
        <p>
          This Refund Policy outlines the terms and conditions for refunds for
          our services. By subscribing to or purchasing our services, you agree
          to this policy. All payments and refunds are processed through Paddle.com.
        </p>
      </div>

      <div className="mb-20">
        <h2>
          <small>Section 1</small>
          <br />
          Subscription Refunds
        </h2>
        <p>
          For subscription-based services, we generally do not offer refunds
          after the subscription has begun. You may cancel your subscription at
          any time through your account settings, and you will continue to have
          access to the service until the end of your current billing period. No
          prorated refunds will be issued for partial periods of service. Any
          refunds, if applicable, will be processed by Paddle.com according to
          their terms and conditions.
        </p>
      </div>

      <div className="mb-20">
        <h2>
          <small>Section 2</small>
          <br />
          Exceptional Circumstances
        </h2>
        <p>
          In rare cases where there are technical issues preventing access to
          the service that are directly attributable to us and cannot be
          resolved within a reasonable timeframe, a partial or full refund may
          be considered at our sole discretion. Any such requests must be made
          in writing and include full details of the issue. If a refund is
          approved, it will be processed through Paddle.com.
        </p>
      </div>

      <div className="mb-20">
        <h2>
          <small>Section 3</small>
          <br />
          How to Request a Refund
        </h2>
        <p>
          If you believe you qualify for a refund under exceptional
          circumstances, please contact our support team with your account
          details and a detailed explanation of your request. All refund
          decisions are final. Please note that Paddle's own policies may also
          apply to your refund request.
        </p>
      </div>

      <div className="mb-20">
        <h2>
          <small>Section 4</small>
          <br />
          Changes to This Policy
        </h2>
        <p>
          We reserve the right to modify or replace this Refund Policy at any
          time. Any changes will be posted on this page, and your continued use
          of the service after such changes constitutes your acceptance of the
          new policy.
        </p>
      </div>

      <p>Last change - July 2024</p>
    </Container>
  );
}
