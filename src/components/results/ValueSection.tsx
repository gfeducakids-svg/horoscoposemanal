'use client';
export function ValueSection() {
    return (
        <section className="py-12 bg-deep-purple">
            <div className="container mx-auto max-w-2xl text-center font-headline text-white">
                <div className="border-y-2 border-dashed border-vibrant-purple py-6 px-4">
                    <p className="text-lg">VALOR TOTAL: <span className="line-through">R$ 211,00</span></p>
                    <p className="text-3xl md:text-4xl my-2">VOCÊ PAGA HOJE: <span className="text-cosmic-gold font-extrabold">R$ 29,90</span></p>
                    <p className="text-lg text-success-green font-bold">ECONOMIA: R$ 181,10 (86% OFF)</p>
                </div>
            </div>
        </section>
    );
}
