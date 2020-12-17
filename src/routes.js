import IssueCreatePage from './pages/IssueCreatePage.svelte'
import NotFoundPage from './pages/NotFoundPage.svelte'

export default {
  '/issues/new': IssueCreatePage,
  '*': NotFoundPage
}
