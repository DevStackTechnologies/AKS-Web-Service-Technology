import React, { Component, ErrorInfo, ReactNode } from 'react';
import { RefreshCw, AlertTriangle, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught React Error:', error, errorInfo);
    this.setState({ errorInfo });
  }

  public handleReload = () => {
    window.location.reload();
  };

  public handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#FFF8F5] flex items-center justify-center p-6 text-[#0F172A]">
          <div className="max-w-lg w-full bg-white rounded-3xl p-8 shadow-2xl border border-red-100 text-center">
            <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner">
              <AlertTriangle className="w-8 h-8" />
            </div>
            
            <h1 className="text-2xl font-bold text-slate-900 mb-2">
              Something went wrong
            </h1>
            <p className="text-sm text-slate-600 mb-6">
              The application encountered an unexpected issue. Please reload the page to continue.
            </p>

            {this.state.error && (
              <div className="bg-slate-50 rounded-xl p-4 mb-6 text-left border border-slate-200 overflow-x-auto">
                <p className="text-xs font-mono text-red-600 font-semibold mb-1">
                  {this.state.error.toString()}
                </p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={this.handleReload}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#E84125] text-white font-semibold shadow-lg shadow-red-500/20 hover:bg-[#D0351B] transition-all"
              >
                <RefreshCw className="w-4 h-4" />
                Reload Page
              </button>
              
              <button
                onClick={this.handleReset}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-100 text-slate-700 font-semibold hover:bg-slate-200 transition-all"
              >
                <Home className="w-4 h-4" />
                Return to Home
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
