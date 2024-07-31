import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: 'BAAR utils',
        loadComponent: () =>
            import('./pages/index/index.component').then((m) => m.IndexComponent),
    },
    {
        path: 'baar-data-visualizer',
        title: 'BAAR data visualizer - BAAR utils',
        loadComponent: () =>
            import('./pages/baar-data-visualizer/baar-data-visualizer.component').then((m) => m.BaarDataVisualizerComponent),
    },
];
