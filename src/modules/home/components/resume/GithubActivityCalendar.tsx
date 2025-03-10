import GitHubCalendar from "react-github-calendar";
import {useEffect, useState} from "react";

export default function GithubActivityCalendar(){
    const [size, setSize] = useState<number>(0);
    useEffect(()=>{
        const resolution = window.innerWidth
        if(resolution >= 1920) setSize(18);
        else if(resolution >= 1400) setSize(16);
        else if(resolution >= 1200) setSize(14);
        else if(resolution >= 1000) setSize(12);
        else setSize(10)
    },[])
    return(
        <GitHubCalendar
            username="JuanZuniga79"
            colorScheme="light"
            blockRadius={4}
            blockSize={size}
            fontSize={14}
            hideMonthLabels={true}
            weekStart={1}
        />
    )
}