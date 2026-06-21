import { Home } from "./home";
import ServicesBanners from "./servicesBanners";
import MotivationalBanner from "./motivationalBanner";
import TrainingPrograms from "./trainingPrograms";
import FitnessGoals from "./fitnessGoals";
import BmiCalculator from "./bmiCalculater";

export function HomeMain () {
    return (
    <>
    <Home/>
    <ServicesBanners/>
    <MotivationalBanner/>
    <TrainingPrograms/>
    <FitnessGoals/>
    <BmiCalculator/>
    </>
)
}
