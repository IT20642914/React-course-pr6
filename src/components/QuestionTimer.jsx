import React,{useState,useEffect} from 'react'

const QuestionTimer = ({timeOut,onTimeOut,mode}) => {
    const [remainingTime, setRemainingTime] = useState(timeOut)
  
    useEffect(() => {
        const timer=setTimeout(onTimeOut, timeOut)
        return () => {
            clearTimeout(timer)
        }
    }, [onTimeOut, timeOut])
  
    useEffect(() => {
      const Interval=  setInterval(() => {
            setRemainingTime(prevTime => prevTime - 100)
        },100)
      return () => {
       clearInterval(Interval)
      }
    }, [])
    
  return (
    < progress id='question-time' max={timeOut} value={remainingTime}
    className={mode}/>
  )
}

export default QuestionTimer