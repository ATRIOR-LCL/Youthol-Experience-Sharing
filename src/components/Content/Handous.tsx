import React from "react";
import "../../style/content/handous.less";
import Box from "./Box";
import { BoxProps } from "./Box";
import sectionOneArray from "../../configs/content/sectionOne.tsx";
import sectionTwoArray from "../../configs/content/sectionTwo.tsx";
import sectionThreeArray from "../../configs/content/sectionThree.tsx";
import sectionFourArray from "../../configs/content/sectionFour.tsx";
import sectionFiveArray from "../../configs/content/sectionFive.tsx";
import sectionSixArray from "../../configs/content/sectionSix.tsx";
import process from '../../assets/img/handous/process.png';
import thread from '../../assets/img/handous/thread.png';
import chromeProcess from '../../assets/img/handous/chromeProcess.png';
import messageQueue from '../../assets/img/handous/messageQueue.png';
import block from '../../assets/img/handous/blocik.png';
import async from '../../assets/img/handous/async.png';

const images = [
    process,
    thread,
    chromeProcess,
    undefined,
    undefined,
    messageQueue,
    block,
    async
]

const sectionArray: BoxProps[] = [
    ...sectionOneArray,
    ...sectionTwoArray,
    ...sectionThreeArray,
    ...sectionFourArray,
    ...sectionFiveArray,
    ...sectionSixArray
];

class Handous extends React.Component {
    render(): React.ReactNode {
        return (
            <div className="handous">
                <div className="boxes">
                    {
                        sectionArray.map((sec, index) => {
                            return <Box
                                key={index}
                                title={sec.title}
                                imgUrl={images[index]}
                                detail={sec.detail}>
                            </Box>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Handous;
