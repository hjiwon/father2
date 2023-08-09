import Image from "next/image";

const Hello = () => {
    return (
        <div className="flex flex-col items-center">

          <Image className="w-52 my-10" src="/Hello.jpeg" alt="" width={100} height={100} />
          <span>
            <span className="text-xl">반갑습니다! <br /> <br /></span>
            사육신 건강지킴이 연구소 <br />
            대표 황 순 창 입니다. <br /> <br />

            건강지킴이 연구소는 <br />
            사회보건기구(WHO)의 이념으로 <br />
            사회적 육체적 정신적으로 안녕한 상태가 되어야 한다는 생각을 가지고 <br /> <br />

            사육신과 관련된 제도적 향상을 위한 연구와 <br />
            문제점 등 개선 건의와 <br />
            사육신과 관련한 고충 등을 <br />
            상담하여 안녕한 상태로 개선하고자 설립하였으며 <br /> <br />

            강남대학교 사회복지 전공과 <br />
            국민건강보험공단 사회공헌활동의 경력을 토대로 <br />
            다양한 여려움이 발생한 이웃에게 꽃 길을 갈 수 있도록 사랑의 마음 나누기를 아끼지 않을 것이며 <br /> <br />

            한분 한분의 소중한 권익이 보호받고 건강한 삶을 영위할 수 있도록 <br />
            건강지킴이가 중심이 되겠습니다. <br /> <br />

            여러분들의 적극적인 협력과 지지를 당부드립니다. <br /> <br />
            
            건강하세요! <br /> <br />
          </span>

        </div>
    )
}

export default Hello;