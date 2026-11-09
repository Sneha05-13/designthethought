import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/tech-ai",
        destination: "/ai-tech",
        permanent: true,
      },
      {
        source: "/design",
        destination: "/design-growth",
        permanent: true,
      },
      {
        source: "/learn-grow",
        destination: "/startups-biz",
        permanent: true,
      },
      {
        source: "/career",
        destination: "/startups-biz",
        permanent: true,
      },
      {
        source: "/category/career",
        destination: "/startups-biz",
        permanent: true,
      },
      {
        source: "/education",
        destination: "/design-growth",
        permanent: true,
      },
      {
        source: "/category/education",
        destination: "/design-growth",
        permanent: true,
      },
      {
        source: "/category/tech-ai",
        destination: "/ai-tech",
        permanent: true,
      },
      {
        source: "/category/design",
        destination: "/design-growth",
        permanent: true,
      },
      {
        source: "/category/learn-grow",
        destination: "/startups-biz",
        permanent: true,
      },
      {
        source: "/category/ai-tech",
        destination: "/ai-tech",
        permanent: true,
      },
      {
        source: "/category/startups-biz",
        destination: "/startups-biz",
        permanent: true,
      },
      {
        source: "/category/design-growth",
        destination: "/design-growth",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
