"use client";
import React from "react";

type JsonLdProps = { 
  data: Record<string, unknown> 
};

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      key="ld-json"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
