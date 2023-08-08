const Footer = () => {
  return (
    <div className="bottom-0 w-screen">
      {/* <div className="bg-stone-800 h-16 flex justify-center items-center">
        <ol className="flex gap-8 text-stone-200">
          <li>회사소개</li>
          <li>사업안내</li>
        </ol>
      </div> */}

      <div className="footer-text bg-stone-900 p-4 flex flex-col text-stone-400 text-center justify-center items-center">
        <span className="text-sm">
          사육신 건강지킴이 연구소 | 경기도 화성시 | 대표: 황순창 | 사업자등록번호: 442-11-02571
        </span>
        <span className="text-sm">
          대표전화: 010-8769-4400 | 이메일: sc2love@naver.com
        </span>
        <br />
        <span className="text-xs leading-5">
        사육신 건강지킴이 연구소 사이트의 모든 콘텐츠는 저작권법의 보호를 받는 바, 콘텐츠/이미지/디자인 등에 대한 무단복제, 전송, 배포, 스크래핑 등의 행위는 저작권법, 콘텐츠산업진흥법 등 관련법령에 의하여 엄격히 금지되어 있습니다.
        </span>
        <br />
        <span className="text-stone-500 text-xs">
          Copyright @2023 Bongdam. All rights reserved.
        </span>
      </div>
    </div>
  )
}

export default Footer;