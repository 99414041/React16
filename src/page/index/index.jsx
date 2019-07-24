import React, { useState } from 'react'

const Index = () => {
    const [page, setPage] = useState('首页');
  
    useEffect(() => {
      console.log('执行effect');
    })
  
    return (
        <div>
          <p>我是{page}组件</p>
          <button onClick={() => setPage('列表')}>
            点我
          </button>
        </div>
    );
  }

export default Index;
