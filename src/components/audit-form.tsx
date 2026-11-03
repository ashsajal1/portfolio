'use client';

import { useState } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function AuditForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage('');

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setStatus('error');
      setErrorMessage(
        'Form is not configured yet (missing Web3Forms access key). Please set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY and try again.'
      );
      return;
    }

    // Normalize website URL so audits always get a usable link
    let normalizedWebsite = website.trim();
    if (normalizedWebsite && !/^https?:\/\//i.test(normalizedWebsite)) {
      normalizedWebsite = `https://${normalizedWebsite}`;
    }

    setStatus('submitting');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Website audit request from ${name.trim()}`,
          from_name: name.trim(),
          name: name.trim(),
          email: email.trim(),
          website: normalizedWebsite,
          message: `Please audit this website: ${normalizedWebsite}`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setName('');
        setEmail('');
        setWebsite('');
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  }

  const isSubmitting = status === 'submitting';

  if (status === 'success') {
    return (
      <div role="status" className="form-success">
        <h2 className="form-success-title">Request received</h2>
        <p>
          Thanks. I&apos;ll review your site and send the audit report to your email
          shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="text-link"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="audit-name" className="field-label">
          Name
        </label>
        <input
          id="audit-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Jane Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={isSubmitting}
          className="field-input"
        />
      </div>

      <div className="field">
        <label htmlFor="audit-email" className="field-label">
          Email
        </label>
        <input
          id="audit-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="jane@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isSubmitting}
          className="field-input"
        />
      </div>

      <div className="field">
        <label htmlFor="audit-website" className="field-label">
          Website
        </label>
        <input
          id="audit-website"
          name="website"
          type="url"
          required
          inputMode="url"
          autoComplete="url"
          placeholder="https://yourwebsite.com"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          disabled={isSubmitting}
          className="field-input"
        />
      </div>

      <p className="form-note">Only used to send the report. No spam.</p>

      {/* Honeypot for Web3Forms spam protection */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="visually-hidden"
        aria-hidden="true"
        aria-label="Leave this field unchecked"
      />

      {status === 'error' && (
        <p role="alert" className="form-error">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn--primary btn--block"
      >
        {isSubmitting ? 'Sending…' : 'Get my free audit'}
      </button>
    </form>
  );
}
