# My Tasks
A playful offline task planner with daily tasks, dice points, reusable rewards and a just-for-fun slot machine.

Upload all these files to the root of a GitHub repository. Enable Settings > Pages > Deploy from a branch > main > / (root). Open the published HTTPS URL, wait for Offline ready, then install from your browser menu.

Rewards remain after redemption. Explicit deletion requires confirmation. The browser uses localStorage, separate from the Android application's native store. No automatic data migration. No native Android widget in the PWA. No analytics or external libraries.

For updates, change the CACHE version in service-worker.js. New service workers activate after old app tabs/windows are closed. Never delete site data unless you intend to lose saved tasks and points.
