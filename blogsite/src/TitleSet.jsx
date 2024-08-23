import React, { useEffect } from 'react'

export default function TitleSet(title) {
  useEffect(()=>{
    document.title = title
  },[title])
}
