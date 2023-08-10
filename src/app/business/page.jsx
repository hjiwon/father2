const Business = () => {
  return (
    <div className="my-8 flex flex-col items-center">
      <h1 className='text-4xl w-5/6'>
        사업안내 <br /> <br />
      </h1>      


      <div className="w-5/6 px-20 py-8 my-8 flex flex-col border border-stone-500 border-2 rounded-large border-dashed">
        <div className="text-2xl font-bold">
          사육신 연구소는
        </div>
        <span>
          <br />
          건강 및 행복 지원을 위한 사업을 진행하고 있으며, 양질의 정보를 제공하여 보다 나은 행복한 생활을 위해 최선을 다하고 있습니다.
        </span>
      </div>
      
      <div className="w-5/6">
        <div className="w-full flex gap-4">
          <div className='w-1/3 flex flex-col items-center'>
          <p className='text-xs w-full border border-stone-300 border-2 border-dotted rounded-large py-5 text-center'>
            <strong className="text-lg">건강관련 조사연구</strong>
            <br />
            <br />
            <span>각종 제도 연구 및 조사</span>
            <br />
            <span>각종 제도 문제점 등 개선 건의</span>

            <br />
            
          </p>

          <div className="h-10 w-0 border-l-2 border-dotted" />

          <p className='text-xs w-full border border-stone-300 border-2 border-dotted rounded-large py-5 text-center'>
            <strong className="text-lg">사회복지제도 홍보</strong>
            <br />
            <br />
            <span>나의 맞춤형 복지지원 찾아보기</span>

            <br />
            
          </p>

          <div className="h-10 w-0 border-l-2 border-dotted" />

          <p className='text-xs w-full border border-stone-300 border-2 border-dotted rounded-large py-5  text-center'>
            <strong className="text-lg">교육ㆍ건강강좌</strong>
            <br />
            <br />
            <span>건강관련 전문기관 등 연계</span>
            <br />
            <span>건강보험 제도 설명회</span>
            <br />
            <span>금연ㆍ중증질환ㆍ만성 질환자 등 지원사업</span>

            <br />
            
          </p>
          </div>

          <div className='w-1/3 flex flex-col items-center'>
          <p className='text-xs w-full border border-stone-300 border-2 border-dotted rounded-large py-5  text-center'>
            <strong className="text-lg">복지 사각지대 이웃 발굴 지원</strong>
            <br />
            <br />
            <span>구제 가능한 제도 지원</span>
            <br />
            <span>사랑의 마음 운동과 연계</span>

            <br />
            
          </p>


          <div className="h-10 w-0 border-l-2 border-dotted" />

          <p className='text-xs w-full border border-stone-300 border-2 border-dotted rounded-large py-5 text-center'>
            <strong className="text-lg">사랑의 마음 운동</strong>
            <br />
            <br />
            <span>지역사회자원과 연계한 이웃사촌 만들기</span>
            <br />
            <span>기금 모금을 위한 바자회 운영</span>

            <br />
            
          </p>
          </div>

          <div className='w-1/3 flex flex-col items-center'>
          <p className='text-xs w-full border border-stone-300 border-2 border-dotted rounded-large py-5  text-center'>
            <strong className="text-lg">자원봉사자와 함께하는 작은 음악회</strong>
            <br />
            <br />
            <span>정신적 건강을 위한 지원</span>

            <br />
            
          </p>

          <div className="h-10 w-0 border-l-2 border-dotted" />

          <p className='text-xs w-full border border-stone-300 border-2 border-dotted rounded-large py-5 text-center'>
            <strong className="text-lg">환경지킴이 활동</strong>
            <br />
            <br />
            <span>환경보호 캠페인</span>
            <br />
            <span>환경보호 교육 및 강좌</span>

            <br />

          </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Business;