import ViteCard from "./components/ViteCard";
import { ViteButtonAzul, ViteButtonBlanco } from "./components/ViteBottons";
import './index.css'

export default function App() {
  return (
    <main className="container">
      <div>
        <ViteButtonAzul text="Get Started"/>
        <ViteButtonBlanco text="Why Vite?"/>
        <ViteButtonBlanco text="View on GitHub"/>
        <ViteButtonAzul text="🎉 ViteConf 23!"/>
      </div>
      <div className="card-group">
        <ViteCard emoji="💡" title="Instant Server Start" text="On demand file serving over native ESM, no bundling required!"/>
        <ViteCard emoji="⚡️" title="Lightning Fast HMR" text="Hot Module Replacement (HMR) that stays fast regardless of app size."/>
        <ViteCard emoji="🛠️" title="Rich Features" text="Out-of-the-box support for TypeScript, JSX, CSS and more."/>
      </div>
      <div className="card-group">
        <ViteCard emoji="📦" title="Optimized Build" text="Pre-configured Rollup build with multi-page and library mode support."/>
        <ViteCard emoji="🔩" title="Universal Plugins" text="Rollup-superset plugin interface shared between dev and build."/>
        <ViteCard emoji="🔑" title="Fully Typed APIs" text="Flexible programmatic APIs with full TypeScript typing."/>
      </div>
    </main>
  )
}


