import Hero from '../components/heroSection/Hero'
import JobsSuitsYou from '../components/jobsSuitsYou/JobsSuitsYou';
import PopularJobCategories from '../components/popularJobCategories/PopularJobCategories'
import MostPopularJobs from './../components/mostPopularJobs/MostPopularJobs';

export default function Home() {
  return (<>
    <Hero/>
    <PopularJobCategories/>
    <MostPopularJobs/>
    <JobsSuitsYou/>
  </>)
}
