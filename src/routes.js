import IssueCreatePage from './pages/IssueCreatePage.svelte'
import NotFoundPage from './pages/NotFoundPage.svelte'
import IssueDetailPage from './pages/IssueDetailPage.svelte'
import IssueListPage from './pages/IssueListPage.svelte'

export default {
  '/issues/new': IssueCreatePage,
  '/issues/:id': IssueDetailPage,
  '/issues': IssueListPage,
  '*': NotFoundPage
}
