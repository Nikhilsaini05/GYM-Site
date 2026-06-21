import { Home } from "./home";
import ServicesBanners from "./servicesBanners";
import MotivationalBanner from "./motivationalBanner";
import TrainingPrograms from "./trainingPrograms";
import FitnessGoals from "./fitnessGoals";
import BmiCalculator from "./bmiCalculater";
import StepsToWeightLoss from "./stepsToWeightLoss";
import Banner from "./Banner";
import TeamMembers from "./TeamMembers";
import TimeTable from "./timeTable";

export function HomeMain () {
    return (
    <>
    <Home/>
    <ServicesBanners/>
    <MotivationalBanner/>
    <TrainingPrograms/>
    <FitnessGoals/>
    <BmiCalculator/>
    <TimeTable/>
    <TeamMembers/>
    <StepsToWeightLoss/>
    <Banner/>
    </>
)
}
