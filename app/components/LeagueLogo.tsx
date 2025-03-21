"use client";

import { useState } from "react";
import { LeageTableData } from "../lib/types";
import Image from "next/image";

interface LeagueLogoProps {
  slug: string;
  src: string;
  altText: string;
}

export default function LeagueLogo({ slug, src, altText }: LeagueLogoProps) {
  return (
    <Image
      key={`${slug}-logo`}
      src={src}
      width={56}
      height={56}
      alt={altText}
    />
  );
}
