// Stand-in for the Lovable-injected error page module.
// Returns a minimal self-contained HTML page used by the SSR wrapper
// (server.ts) when rendering fails catastrophically.
export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Something went wrong</title>
    <style>
      body { font-family: system-ui, sans-serif; background: #0a0a0a; color: #e5e5e5;
             min-height: 100vh; margin: 0; display: flex; align-items: center;
             justify-content: center; text-align: center; padding: 1rem; }
      h1 { font-size: 1.25rem; }
      p { color: #a3a3a3; font-size: 0.875rem; }
    </style>
  </head>
  <body>
    <div>
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end. Please try refreshing.</p>
    </div>
  </body>
</html>`;
}
