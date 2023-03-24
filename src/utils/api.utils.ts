export async function fetchWithTimeout(
  resource: RequestInfo | URL,
  options?: RequestInit & { timeout?: number },
) {
  const { timeout = 2000 } = options || {};

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  const response = await fetch(resource, {
    ...options,
    signal: controller.signal,
  });
  clearTimeout(id);

  return response;
}
