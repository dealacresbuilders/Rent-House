'use client'

import Image from "next/image"
import Link from "next/link"
import { useBlog } from "@/contextapi/BlogContext";
import "@/app/globals.css";
import Breadcrumb from "@/components/Breadcrumb";
export default function BlogDetails({ post }) {

  const single = post?.blog;
  const { blogs: recentBlogs } = useBlog();

  return (
    <div className="max-w-6xl mx-auto gap-10 px-4 
    bg-gradient-to-b from-[#E6FBF8] to-white py-10">
<div className="mb-6">
   <Breadcrumb />
  </div>
      {/* LEFT SIDE */}
      <article className="lg:col-span-2 space-y-10">
 {/* TITLE + DATE */}
            <div className="mt-6 px-2 md:px-0">

              <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
                {single?.Title}
              </h1>

              <p className="text-sm text-gray-500 mt-2">
                {new Date(single?.Date).toDateString()}
              </p>

            </div>
        {/* HERO */}
        <div className="w-full flex justify-center pt-2">
          <div className="w-full">

            {/* IMAGE */}
            <div className="w-full h-[260px] md:h-[480px] bg-white md:rounded-2xl overflow-hidden shadow-sm 
            border border-[#6DE1D2]/30">
              <Image
                src={single?.HeroImg?.url}
                unoptimized
                alt={single?.HeroAltText || "Blog Image"}
                width={1200}
                height={800}
                priority
                className="w-full h-full object-cover"
              />
            </div>

           

          </div>
        </div>

        {/* BLOG CONTENT */}
        <div className="max-w-6xl mx-auto space-y-8">

          {single.Content?.map((section) => (

            <div key={section?._id}>

              {/* TEXT */}
              <div className="quill-content">
                <div
                  className="ql-editor !p-0 text-gray-800 leading-relaxed
                  [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:text-gray-900
                  [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-gray-900
                  [&_p]:text-gray-700
                  [&_li]:text-gray-700 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mt-3
  [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mt-3
  [&_li]:mb-2
"
  dangerouslySetInnerHTML={{ __html: section?.content }}
                  
                />
              </div>

              {/* IMAGE */}
              {section?.img?.url && (
                <div className="w-full my-6">
                  <Image
                    src={section.img.url}
                    unoptimized
                    alt={section?.img?.altText || "Blog Image"}
                    width={900}
                    height={600}
                    sizes="(max-width: 768px) 100vw, 700px"
                    className="w-full h-[260px] md:h-[480px] rounded-xl object-cover shadow-sm 
                    border border-[#6DE1D2]/30"
                  />
                </div>
              )}

            </div>

          ))}

          {/* FAQs */}
          {single?.FAQs?.length > 0 && (
            <div className="mt-14">

              {/* HEADING */}
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4 max-w-6xl mx-auto">

                {single.FAQs.map((faq, i) => (
                  <details
                    key={i}
                    className="group bg-white border border-[#6DE1D2]/30 rounded-xl p-4 shadow-sm hover:shadow-md transition duration-300"
                  >

                    {/* QUESTION */}
                    <summary className="flex justify-between items-center cursor-pointer list-none">

                      <span className="font-semibold text-gray-900 group-hover:text-[#6DE1D2] transition">
                        {faq.Q}
                      </span>

                      {/* ICON */}
                      <span className="ml-4 text-[#6DE1D2] transition-transform duration-300 group-open:rotate-180">
                        ▼
                      </span>
                    </summary>

                    {/* ANSWER */}
                    <div className="mt-3 text-gray-600 leading-relaxed border-t border-[#6DE1D2]/30 pt-3">
                      {faq.A}
                    </div>

                  </details>
                ))}

              </div>

            </div>
          )}

        </div>

      </article>

    </div>
  )
}