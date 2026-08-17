import React from "react";
import Link from "next/link";
import Button from "./button";
import { FiSend } from "react-icons/fi";

export default function CTASection() {
    return (
        <section className="py-12 px-4 sm:px-12">
            <div className="container w-full mx-auto">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-secondary p-8 sm:p-12 text-center shadow-2xl shadow-primary/30">
                    <div className="pointer-events-none absolute -top-24 -right-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

                    <h2 className="relative text-2xl sm:text-4xl font-extrabold text-slate-50">
                        Have a Project in Mind?
                    </h2>
                    <p className="relative text-slate-100/90 mt-3 max-w-lg mx-auto text-sm sm:text-base">
                        Let&apos;s turn your idea into a digital product that moves your business forward. Free consultation, no strings attached.
                    </p>

                    <div className="relative mt-7 flex items-center justify-center">
                        <Link href="mailto:ashsajal@yahoo.com">
                            <Button
                                label="Start a Conversation"
                                icon={<FiSend />}
                                className="bg-none bg-slate-50 text-primary hover:bg-white hover:to-transparent"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
