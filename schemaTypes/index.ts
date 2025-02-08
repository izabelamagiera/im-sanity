
import Job from './components/Job'
import Masthead from './components/Masthead'
import Project from './components/Project'
import Review from './components/Review'
import SectionHeader from './components/SectionHeader'
import home from './pages/home'
import project from './pages/project'
import TagsSchema from './utils/TagsSchema'

export const schemaTypes = [
    // pages
    home, 
    project,

    // components
    Job,
    Masthead, 
    Project,
    Review,
    SectionHeader,
     
    // utils
    TagsSchema
]
