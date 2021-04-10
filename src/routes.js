import IssueEditPage from './components/Pages/IssueEditPage.svelte'
import IssueCreatePage from './components/Pages/IssueCreatePage.svelte'
import NotFoundPage from './components/Pages/NotFoundPage.svelte'
import IssueDetailPage from './components/Pages/IssueDetailPage.svelte'
import IssueListPage from './components/Pages/IssueListPage.svelte'

export default {
  '/issues/new': IssueCreatePage,
  '/issues/:id/edit': IssueEditPage,
  '/issues/:id': IssueDetailPage,
  '/issues': IssueListPage,
  '/': IssueListPage,
  '*': NotFoundPage
}
