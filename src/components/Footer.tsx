import { NextPage } from "next";
import Link from "next/link";
import { Instagram, Facebook, Twitter, Github, Linkedin, PhoneCallIcon, MapPin, Mail } from "lucide-react";
import StayUpdated from "./footer/StayUpdated";

const Footer: NextPage = () => {
    return(
        <div className="card pt-4 ">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            <div className="px-2 flex flex-col gap-4">
                <h4 className="text-h4">Zenvoka</h4>
                <p className="text-text-secondary text-sm md:max-w-[300px]">
                    Your trusted partner for quality products. We&apos;re committed to providing the best shopping experience with excellent customer service.
                </p>
                <div className="flex gap-4 items-center">
                    <a 
                    href="/"
                    target="_blank"
                    rel = 'noopener noreferrer'
                    className="text-text-secondary"
                    >
                        <Facebook className="w-4 h-4 cursor-pointer"/>
                    </a>

                    <a 
                    href="/"
                    target="_blank"
                    rel = 'noopener noreferrer'
                    className="text-text-secondary"
                    >
                        <Twitter className="w-4 h-4 cursor-pointer"/>
                    </a>

                    <a 
                    href="/"
                    target="_blank"
                    rel = 'noopener noreferrer'
                    className="text-text-secondary"
                    >
                        <Instagram className="w-4 h-4 cursor-pointer"/>
                    </a>

                    <a 
                    href="/"
                    target="_blank"
                    rel = 'noopener noreferrer'
                    className="text-text-secondary"
                    >
                        <Github className="w-4 h-4 cursor-pointer"/>
                    </a>

                    <a 
                    href="/"
                    target="_blank"
                    rel = 'noopener noreferrer'
                    className="text-text-secondary">
                        <Linkedin className="w-4 h-4 cursor-pointer"/>
                    </a>
                    
                </div>
            </div>

            {/* Quick Links */}
            <div className="px-2 flex flex-col gap-2 ">
                <h4 className="text-h4 ">Quick Links</h4>
                <div className="flex flex-col gap-2">
                    <Link href={'/about'} className="text-sm text-text-secondary"> About us</Link>
                    <Link href={'/products'} className="text-sm text-text-secondary">products</Link>
                    <Link href={'/categories'} className="text-sm text-text-secondary">Categories</Link>
                    <Link href={'/contact'} className="text-sm text-text-secondary">Contact</Link>
                    <Link href={'/support'} className="text-sm text-text-secondary">Support</Link>
                </div>
            </div>

            {/* Customer Service */}
            <div className="px-2 flex flex-col gap-2">
                <h4 className="text-h4">Customer Service</h4>
                <div className="flex flex-col gap-2">
                    <Link href={'/fqa'} className="text-sm text-text-secondary">FQA</Link>
                    <Link href={'/info'} className="text-sm text-text-secondary">Shipping Info</Link>
                    <Link href={'/returns'} className="text-sm text-text-secondary">Returns</Link>
                    <Link href={'/privacy-policy'} className="text-sm text-text-secondary">Privacy Policy</Link>
                    <Link href={'/terms-of-service'} className="text-sm text-text-secondary">Terms Of Service</Link>
                </div>
            </div>

            {/* Stay Updated */}
            <div className="px-2 flex flex-col gap-2 pb-4">
                <h4 className="text-h4">Stay Updated</h4>

                <p className="text-text-secondary text-sm">
                    Subscribe to our newsletter for the latest updates and exclusive offers.
                </p>
                <div>
                    <StayUpdated />
                </div>
                <div>
                    <Link href={'/'} className="text-text-secondary flex items-center gap-2">
                    <Mail className="w-3 h-3"/>
                    support@zenvoka.com
                    </Link>
                    <div className="text-sm text-text-secondary flex items-center gap-2">
                        <PhoneCallIcon className="w-3 h-3"/> +265 983 934 026
                    </div>
                    <div className="text-sm text-text-secondary flex items-center gap-2">
                        <MapPin className="w-3 h-3"/>Masasa Secondary school, Mzuzu, Malawi
                    </div>
                </div>
            </div>

        </div>
            {/* final links */}
            <div className="flex flex-col gap-2 items-center sm:flex-row justify-between px-4 border-t border-border-dark pt-4">
                <p className="text-sm text-text-secondary">© 2025 Zenvoka. All rights reserved.</p>
                <div className="flex items-center gap-4">
                    <Link href={'/'} className="text-sm text-text-secondary">Privacy</Link>
                    <Link href={'/'} className="text-sm text-text-secondary">Terms</Link>
                    <Link href={'/'} className="text-sm text-text-secondary">Cookies</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;