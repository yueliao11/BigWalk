import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { pageMetadata } from "@/lib/seo";
import { ROUTES, relatedLinks } from "@/lib/routes";

export const metadata: Metadata = pageMetadata({
  path: ROUTES.coop.href,
  title: ROUTES.coop.title,
  description: ROUTES.coop.desc,
  keywords: ROUTES.coop.keywords,
});

export default function CoopPage() {
  return (
    <PageShell
      breadcrumb={[
        { name: "Home", path: "/" },
        { name: "Co-op Troubleshooting", path: "/co-op-not-working" },
      ]}
      h1="Big Walk Co-op / Crossplay Not Working? Fixes"
      lead="Big Walk is built for co-op, but the join fails more often than it should. The usual causes: a bad join code, strict NAT, or a platform the session host cannot crossplay with. Run the checks below in order — most disconnects clear at step 2."
      howTo={{
        name: "Fix Big Walk co-op / crossplay",
        steps: [
          { title: "Re-copy the join code", text: "Codes are case-sensitive and expire after a short window. Regenerate a fresh code from the host and paste it exactly as shown — one wrong character is a silent fail." },
          { title: "Check NAT type", text: "Strict NAT blocks peer connections. Use a wired connection or enable UPnP on your router; a moderate NAT usually works, strict rarely does." },
          { title: "Confirm crossplay is on", text: "Both players must have crossplay enabled in settings; a console player and a PC player need it on at both ends or the join fails quietly." },
          { title: "Match game versions", text: "If one of you skipped the latest patch, the session browser will not pair you. Update Big Walk on both machines and restart the game fully." },
          { title: "Restart the session clean", text: "Close Big Walk, reboot the router if NAT looked wrong, then have the host start a brand-new walk instead of reviving a dropped one." },
          { title: "Host on the stronger connection", text: "Have the player with open NAT host the walk; everyone else joins. Hosting behind strict NAT is the single most common cause of mid-walk drops." },
        ],
      }}
      related={relatedLinks(["tools", "redTower", "guide", "price", "achievements"])}
      faqs={[
        { q: "Why won't my friend join my Big Walk session?", a: "Nine times out of ten it is a stale or mistyped join code, or strict NAT on one side. Regenerate the code and check NAT type first — those two checks solve most reports." },
        { q: "Is Big Walk crossplay between PC and console?", a: "Yes, between Steam, PS5 and Nintendo Switch 2, with crossplay enabled on both accounts. If one player has it off, the join fails silently with no error message." },
        { q: "Big Walk keeps disconnecting mid-walk — why?", a: "A strict or unstable NAT drops the peer link once the session is live. Host on the open-NAT connection and use a wired network for the anchor walker." },
        { q: "Why does my Big Walk join code say invalid?", a: "The code expired or a character was mistyped — codes are case-sensitive. Ask the host to generate a new one and paste it directly instead of typing it by hand." },
        { q: "Does Big Walk have dedicated servers?", a: "No. Every walk is hosted peer-to-peer by one player, which is why the host's NAT type and connection quality decide whether everyone else can join and stay connected." },
        { q: "Can I play Big Walk co-op on different game versions?", a: "No. Mismatched versions will not see each other's sessions at all. Both players need the same patch installed, so update before troubleshooting anything else." },
        { q: "What NAT type do I need for Big Walk?", a: "Open or moderate works for joining; open is strongly recommended for hosting. Strict NAT can sometimes join an open host but will drop or block most sessions." },
        { q: "What should I do if Big Walk crossplay fails between PS5 and PC?", a: "Confirm both platforms have Crossplay enabled in Settings > Network, ensure both games are updated to the exact same version patch, and verify the host generates a fresh join code. Because PC and console use different network backends, having the PC player host often resolves handshake timeouts." },
      ]}
    >
      <p>
        Big Walk is a co-op puzzle game from House House, published by Panic,
        released August 4, 2026 on Steam, Nintendo Switch 2 and PS5. Every
        walk is a peer-hosted session: one player hosts, everyone else joins
        their game directly. That design is why connection problems hit harder
        here than in server-based games — if the host&apos;s network rejects
        you, there is no fallback server to catch the join. The good news:
        almost every &quot;Big Walk co-op not working&quot; report comes down
        to one of four causes, and all four are fixable in a few minutes.
      </p>
      <img src="/images/coop-platforms.png" alt="Big Walk co-op fix checklist — restart session, check NAT, match versions, re-add friend" className="my-6 w-full rounded-xl border border-slate-200" loading="lazy" />

      <h2>Quick fixes that solve most cases</h2>
      <p>
        Work through this list before anything deeper. Each check takes under
        a minute, and together they clear the large majority of failed joins
        and mid-walk disconnects.
      </p>
      <ul>
        <li><strong>Code rejected:</strong> join codes are case-sensitive and expire. Ask the host to regenerate a fresh code and paste it exactly as shown — one wrong character fails with no useful error.</li>
        <li><strong>Stuck on &quot;connecting&quot;:</strong> the peer handshake is blocked, almost always by strict NAT. Switch to a wired connection or enable UPnP on your router, then retry.</li>
        <li><strong>Joins then drops:</strong> the link opened but cannot hold. Have the player with the open NAT host the walk and everyone else join them.</li>
        <li><strong>Crossplay invisible:</strong> the crossplay toggle is off at one end. Both players must enable it; the setting does not sync between platforms.</li>
        <li><strong>Session not in list at all:</strong> version mismatch. Update Big Walk on both machines and fully restart the game, not just resume it.</li>
      </ul>

      <h2>Platform-by-platform checks</h2>
      <p>
        Big Walk runs the same peer-to-peer netcode on all three launch
        platforms, but each system has its own way of breaking it. Jump to
        the platform that is failing.
      </p>

      <h3>Steam</h3>
      <p>
        On Steam, start by verifying the game files: right-click Big Walk in
        your library, open Properties, then Installed Files, and run the
        verification. A partial download after a patch breaks session
        handshakes without any obvious symptom. Next, check the Windows
        firewall — the first time Big Walk hosted a session it asked for
        network access, and if you dismissed that prompt, hosting is blocked
        until you allow it on private networks. Finally, confirm both players
        are on the same Steam branch; opting into a beta or test branch makes
        your version invisible to players on the stable build.
      </p>

      <h3>PS5</h3>
      <p>
        On PS5, check two system-level items first. Open Settings, Network,
        and run the connection test to see your NAT type — Type 1 and Type 2
        are fine, Type 3 is the strict case that causes most failures. Then
        make sure the console was not woken from rest mode mid-session;
        resuming Big Walk from rest sometimes leaves the old session half-open,
        so fully close the game and relaunch. Crossplay lives in the in-game
        settings, not the system settings, so toggle it inside Big Walk
        itself. If PSN is having a partial outage, friend-list joins fail even
        when direct codes still work — use a code instead.
      </p>

      <h3>Nintendo Switch 2</h3>
      <p>
        On Switch 2, open System Settings, Internet, and test the connection
        to read your NAT grade. Grades A and B behave like open and moderate
        NAT; C and below will struggle to join peer-hosted walks. Wireless is
        the other common culprit — the Switch 2 dock sits behind TVs and
        cabinets, and a weak signal drops peer links mid-walk even when the
        join succeeded. Move the dock closer to the router or use a wired
        adapter. As on every platform, both players need the same game
        version, so check for an update from the home screen before assuming
        the network is at fault.
      </p>

      <h2>NAT types explained</h2>
      <p>
        NAT — network address translation — decides how easily your machine
        accepts incoming peer connections, and Big Walk leans on that
        completely because there are no dedicated servers. Open NAT means
        your router passes incoming traffic freely; you can host and join
        anything. Moderate NAT filters some traffic; you can join open hosts
        reliably but should avoid hosting. Strict NAT blocks unsolicited
        inbound connections entirely; you will fail most joins and drop the
        ones that connect.
      </p>
      <p>
        To move from strict toward open, do these in order: plug in an
        ethernet cable, enable UPnP in your router settings, and reboot the
        router so it rebuilds its table. If your ISP puts you behind
        carrier-grade NAT — common on mobile hotspots and some apartment
        networks — no local setting will fully open it, so let a friend with
        open NAT host instead. A quick way to confirm the fix worked: run
        your platform&apos;s network test again and check the NAT reading
        before relaunching Big Walk.
      </p>

      <h2>Join codes and crossplay</h2>
      <p>
        Big Walk has no public server browser. Every session is joined with a
        short code the host generates from the in-game walk menu, and that
        code is the whole invitation system. Codes are case-sensitive, they
        expire after a short window, and a code from a dropped session is
        dead — the host must generate a new one for each attempt. Paste the
        code rather than typing it; the characters that look alike are the
        usual failure.
      </p>
      <p>
        Crossplay spans Steam, PS5 and Switch 2, but it is opt-in at both
        ends. If either player has the toggle off, codes from the other
        platform fail silently — no error, just a refusal. Platform friend
        lists are a separate system: a PSN friend still needs crossplay on
        and a valid code to reach your Steam session. When in doubt, both
        players open settings, confirm crossplay is on, then exchange a fresh
        code.
      </p>

      <h2>When nothing works</h2>
      <p>
        If you have a fresh code, open or moderate NAT, matching versions,
        and crossplay on at both ends, and it still fails, isolate the broken
        side. Bring in a third player: if they can join the host but you
        cannot, the problem is your network; if nobody can join, it is the
        host&apos;s. Swap who hosts and retest — a walk that fails one
        direction often works immediately the other way.
      </p>
      <p>
        Most &quot;co-op not working&quot; threads are solved by the steps
        above. If yours is not, capture the exact error text, your platform,
        NAT type, and game version before you post or contact Panic support.
        &quot;It doesn&apos;t work&quot; gets guesses; a specific error
        message gets a fix.
      </p>
    </PageShell>
  );
}
