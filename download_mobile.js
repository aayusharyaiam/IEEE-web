import fs from 'fs/promises';

const screens = [
  { name: 'mobile_home', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2EwM2YzYzczZmY2OTRiNWY5ODkyNjNlYjdjNmU1MmI4EgsSBxC735rM4AYYAZIBJAoKcHJvamVjdF9pZBIWQhQxMDU5NzkwMzQ1MzEwODI4NzMzMg&filename=&opi=89354086' },
  { name: 'mobile_members', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2NkYzQ2Yjk3Njk1MzQyNWJhY2JkNzJlMWRkN2E1Y2YwEgsSBxC735rM4AYYAZIBJAoKcHJvamVjdF9pZBIWQhQxMDU5NzkwMzQ1MzEwODI4NzMzMg&filename=&opi=89354086' },
  { name: 'mobile_gallery', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzQ0ZWZmOWE2MGQ2YjRlODRhYTRhMGQxNzFlNzk2MTJjEgsSBxC735rM4AYYAZIBJAoKcHJvamVjdF9pZBIWQhQxMDU5NzkwMzQ1MzEwODI4NzMzMg&filename=&opi=89354086' },
  { name: 'mobile_events', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzkxMGQ1YmU4NzhmMjQ4ODE4NTA1Y2QzM2YzMTAyNmMwEgsSBxC735rM4AYYAZIBJAoKcHJvamVjdF9pZBIWQhQxMDU5NzkwMzQ1MzEwODI4NzMzMg&filename=&opi=89354086' },
  { name: 'mobile_contact', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzA2YWY0NTZlZjQ0YTRkODQ4NmIwZmJjMzBkYjIxNWQ5EgsSBxC735rM4AYYAZIBJAoKcHJvamVjdF9pZBIWQhQxMDU5NzkwMzQ1MzEwODI4NzMzMg&filename=&opi=89354086' },
];

async function download() {
  for (const s of screens) {
    console.log(`Downloading ${s.name}.html...`);
    const res = await fetch(s.url);
    const text = await res.text();
    await fs.writeFile(`${s.name}.html`, text);
  }
}
download();
