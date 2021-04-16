import IssueEditPage from './pages/IssueEditPage.svelte'
import IssueCreatePage from './pages/IssueCreatePage.svelte'
import NotFoundPage from './pages/NotFoundPage.svelte'
import IssueDetailPage from './pages/IssueDetailPage.svelte'
import IssueListPage from './pages/IssueListPage.svelte'
import SearchResultPage from './pages/SearchResultPage.svelte'

export default {
  '/issues/new': IssueCreatePage,
  '/issues/:id/edit': IssueEditPage,
  '/issues/:id': IssueDetailPage,
  '/issues': IssueListPage,
  '/search/:query': SearchResultPage,
  '/': IssueListPage,
  '*': NotFoundPage
}
