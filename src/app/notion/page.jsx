import {Client} from '@notionhq/client'
import Image from 'next/image';

const Notion = async () => {
  let notionData;
  const notion = new Client({
    auth: process.env.NOTION_KEY
  })
  const databaseId = process.env.NOTION_DATABASE_ID
  let error;

  await notion.databases.query({
    database_id: databaseId,
  }).then((res) => {
    notionData = res.results;
  }).catch((err) => {
    console.log(err)
    error = true;
  })
  const result = notionData?.map((item, index) => {

    const content = item.properties.Content.rich_text[0]?.text.content;
    const paragraphs = content?.split('\n');

    let titleTagImage;
    if (item.properties.Name.title[0]?.plain_text.split('(')[1] === '언론)') {
      titleTagImage = '/news-icon.png';
    } else if (item.properties.Name.title[0]?.plain_text.split('(')[1] === 'facebook)') {
      titleTagImage = '/facebook-icon.png';
    }
  
    return (
      <div key={index} className='bg-stone-300 p-5 m-5 break-keep'>
        
        <div className='mb-10'>
          <div className='flex'>
            <h1 className='text-2xl notion-title text-center'>{item.properties.Name.title[0]?.plain_text.split('(')[0]}</h1>
            <Image className='ml-auto w-9 h-9' width={40} height={40} src={titleTagImage} alt='title-tag'/>
          </div>
          <span className='absolute right-8'>{item.properties.Date.date?.start}</span>
        </div>
        {paragraphs?.map((paragraph, paragraphIndex) => (
          <p key={paragraphIndex}>{paragraph ? paragraph : 'ㅤ'}</p>
        ))}
      </div>
    );
  });

  return (
    <div className='flex flex-col'>
      {error && <div>에러가 발생했습니다. 관리자에게 연락하세요.</div>}

      {result}
    </div>
  )
} 

export default Notion;