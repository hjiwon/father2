import {Client} from '@notionhq/client'



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
  
    return (
      <div key={index} className='bg-stone-300 p-5 m-5'>
        
        <div className='mb-10'>
          <h1 className='text-2xl notion-title text-center'>{item.properties.Name.title[0]?.plain_text}</h1>
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