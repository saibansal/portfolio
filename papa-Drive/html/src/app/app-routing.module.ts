import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full'
  },
  {
    path: 'get-started',
    loadChildren: () => import('./get-started/get-started.module').then(m => m.GetStartedPageModule)
  },
  {
    path: 'verify-otp',
    loadChildren: () => import('./verify-otp/verify-otp.module').then(m => m.VerifyOtpPageModule)
  },
  {
    path: 'upload-document',
    loadChildren: () => import('./upload-document/upload-document.module').then(m => m.UploadDocumentPageModule)
  },
  {
    path: 'document-list',
    loadChildren: () => import('./document-list/document-list.module').then(m => m.DocumentListPageModule)
  }, {
    path: 'verify-details',
    loadChildren: () => import('./verify-details/verify-details.module').then(m => m.VerifyDetailsPageModule)
  },
  {
    path: 'expense-list',
    loadChildren: () => import('./expense-list/expense-list.module').then(m => m.ExpenseListPageModule)
  },
  {
    path: 'confirmation',
    loadChildren: () => import('./confirmation/confirmation.module').then(m => m.ConfirmationPageModule)
  },
  {
    path: 'miles-tracking',
    loadChildren: () => import('./miles-tracking/miles-tracking.module').then(m => m.MilesTrackingPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }