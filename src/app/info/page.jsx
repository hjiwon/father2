const Info = () => {
  return (
    <div className="flex flex-col items-center">

      <div className="flex flex-col items-center">
      <img className="w-52 my-10" src="/Info.jpeg" alt="" />
      </div>
      
      {/* <h1 className="text-center text-5xl">대표자 이력</h1> <br /> <br /> */}

      <span style={{ whiteSpace: 'pre' }}>
        (현) {`   사육신 건강지킴이 연구소 대표`} <br />
            {`          채용 · 승진 등 면접관`}<br />
            {`          화성특례시 준비위원회 의원`}<br /> <br />

        (전) {`   국민건강보험공단 지사장`} <br />
        {`          국민건강보험공단 감사실`}<br />
        {`          용인시 지역보건의료심의회의원`}<br />
        {`          안양시 사회복지협의체 부회장`}<br /> <br />

        (학력) 서강대학교 MBA 내부감사 전문과정 수료 <br />
        {`          강남대학교 사회복지학 · 행정학 전공`}<br /><br />
      </span>

    </div>
  )
}

export default Info;