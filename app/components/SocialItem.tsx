import Image from "next/image";
export interface SocialItemProps {
    src: string,
    href: string,
    alt: string,
    text: string,
    width: number,
    height: number,
    isDownload: boolean,
    showText?: boolean
}

export default function SocialItem(props: SocialItemProps) {
    let download = props.isDownload ? { download: "Haruki Koh - Resume" } : {};
    return (
        <li className="social-item">
            <a href={props.href} className="link" target="_blank" {...download}>
                <Image src={`/icons/${props.src}`} alt={props.alt} width={props.width} height={props.height} />
                {props.showText ? <p>{props.text}</p> : ''}
            </a>
        </li>
    )
}