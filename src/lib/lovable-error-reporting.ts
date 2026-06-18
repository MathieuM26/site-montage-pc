// Stand-in for the module Lovable injects in its own environment.
// Outside Lovable there is nowhere to report to, so this is a no-op.
export function reportLovableError(
  _error: unknown,
  _context?: Record<string, unknown>,
): void {
  // Intentionally empty.
}
