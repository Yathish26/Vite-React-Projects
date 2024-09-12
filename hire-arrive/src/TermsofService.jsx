import React from 'react'

export default function TermsofService() {
  const updatedDate = '01/09/2024'
  const companyname = 'Hire Arrive'
  const compmail = 'f9oqB@example.com'
  const website = 'https://www.hirearrive.vercel.app'
  const Jurisdiction = 'Karnataka High Court'
  const Jurisdictionstate = 'Karnataka'

  return (
    <div className="bg-gray-900 text-gray-300 p-6 md:p-12">
      <h1 className="text-4xl font-bold text-purple-500 mb-6">Terms of Service</h1>
      <p className="mb-4">By using our website, you agree to be bound by these terms. If you do not agree to these terms, please do not use our website.</p>
      <p className="mb-8">Last updated: {updatedDate}</p>

      <h2 className="text-2xl font-semibold text-purple-500 mb-4">
        Welcome to {companyname}! These Terms and Conditions govern your use of our services, including the deployment of gig workers/laborers to clients. By using our services, you agree to these terms.
      </h2>

      <ul className="list-disc list-inside space-y-6">
        <li className="font-semibold text-xl text-purple-500">Acceptance of Terms</li>
        <p className="ml-6">By accessing this website, we assume you accept these terms and conditions. Do not continue to use {companyname} if you do not agree to take all of the terms and conditions stated on this page.</p>

        <li className="font-semibold text-xl text-purple-500">Data Collection</li>
        <p className="ml-6">- Personal Data: When you register on our website, subscribe to our newsletter, or fill out a form, you may be asked to provide personal information such as your name, email address, and other relevant details.</p>
        <p className="ml-6">- Non-Personal Data: We may collect non-personal information such as browser type, device information, and other anonymous data to enhance user experience.</p>

        <li className="font-semibold text-xl text-purple-500">Use of Collected Data</li>
        <p className="ml-6">- Purpose: The data collected is used to improve our services, provide customer support, and communicate with users.</p>
        <p className="ml-6">- Data Sharing: We do not share your personal information with third parties except for partners who help us in operating our website and conducting our business, provided those parties agree to keep this information confidential.</p>

        <li className="font-semibold text-xl text-purple-500">Cookies</li>
        <p className="ml-6">We employ the use of cookies. By accessing {companyname}, you agreed to use cookies in agreement with the {companyname}'s Privacy Policy. Cookies are used to enhance the user experience, and you can choose to disable cookies via your browser settings.</p>

        <li className="font-semibold text-xl text-purple-500">User Responsibilities</li>
        <p className="ml-6">- Account Security: Users are responsible for maintaining the confidentiality of their account information, including passwords.</p>
        <p className="ml-6">- Prohibited Activities: Users agree not to engage in activities that could harm the website, other users, or violate applicable laws.</p>

        <li className="font-semibold text-xl text-purple-500">Intellectual Property</li>
        <p className="ml-6">All content provided on this website, including text, graphics, logos, and images, is the intellectual property of {companyname}. You may not reproduce or distribute any content without our explicit permission.</p>

        <li className="font-semibold text-xl text-purple-500">Limitation of Liability</li>
        <p className="ml-6">{companyname} shall not be held liable for any damages arising out of the use or inability to use the website, including but not limited to direct, indirect, incidental, punitive, and consequential damages.</p>

        <li className="font-semibold text-xl text-purple-500">Changes to Terms and Conditions</li>
        <p className="ml-6">We reserve the right to modify these terms and conditions at any time. Changes will be posted on this page, and continued use of the website implies acceptance of the modified terms.</p>

        <li className="font-semibold text-xl text-purple-500">Governing Law</li>
        <p className="ml-6">These terms and conditions are governed by and construed in accordance with the laws of {Jurisdiction}, and you submit to the non-exclusive jurisdiction of the courts located in {Jurisdictionstate} for the resolution of any disputes.</p>

        <li className="font-semibold text-xl text-purple-500">Contact Information</li>
        <p className="ml-6">If you have any questions about these terms, please contact us at <a href={`mailto:${compmail}`} className="text-purple-500 underline hover:text-purple-400">{compmail}</a></p>

      </ul>
    </div>
  )
}

const Terms = (props) => {
  const { title, clause, nonclause, clients, workers, finaltip, example } = props;

  return (
    <>
      {title && <li className="font-semibold text-xl text-purple-500">{title}</li>}
      {clause && <p className="ml-6">Clause -{clause}</p>}
      {nonclause && <p className="ml-6">Non Sharing Clause -{nonclause}</p>}
      {clients && <p className="ml-6">For Clients -{clients}</p>}
      {workers && <p className="ml-6">For Workers -{workers}</p>}
      {finaltip && <p className="ml-6">Final Tip -{finaltip}</p>}
      {example && <p className="ml-6">Example -{example}</p>}

    </>
  )
}
