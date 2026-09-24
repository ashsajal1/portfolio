'use client';

import { useState } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const inputClassName =
  'w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 disabled:opacity-60';

const labelClassName =
  'mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300';

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
      <div role="status" className="py-4 text-center">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50">
          Request received!
        </h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Thanks! I&apos;ll review your site and send the audit report to your
          email shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-4 text-sm font-medium text-primary underline underline-offset-4"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="audit-name" className={labelClassName}>
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
          className={inputClassName}
        />
      </div>

      <div>
        <label htmlFor="audit-email" className={labelClassName}>
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
          className={inputClassName}
        />
      </div>

      <div>
        <label htmlFor="audit-website" className={labelClassName}>
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
          className={inputClassName}
        />
      </div>

      <p className="text-xs text-slate-500 dark:text-slate-400">
        Your email will be used to send you the audit report. No spam.
      </p>

      {/* Honeypot for Web3Forms spam protection */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
        aria-label="Leave this field unchecked"
      />

      {status === 'error' && (
        <p role="alert" className="text-xs text-red-600 dark:text-red-400">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-gradient-to-br from-primary to-secondary p-2.5 text-sm font-semibold text-slate-50 dark:text-slate-900 hover:to-secondaryHigh focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 disabled:opacity-60"
      >
        {isSubmitting ? 'Sending…' : 'Get My Free Audit'}
      </button>
    </form>
  );
}
