import type { Metadata } from 'next'
import PolicyLayout from '@/components/layout/PolicyLayout'

export const metadata: Metadata = {
  title: 'Adatvédelmi tájékoztató',
  description: 'A hungarytennis.com adatvédelmi tájékoztatója — hogyan kezeljük személyes adatait.',
}

export default function PrivacyPolicyPage() {
  const updated = new Date().toLocaleDateString('hu-HU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <PolicyLayout title="Adatvédelmi tájékoztató" updated={updated}>
      <h2>1. Általános rendelkezések</h2>
      <p>
        Ez az adatvédelmi tájékoztató ismerteti, hogy a hungarytennis.com weboldal milyen személyes
        adatokat gyűjt és kezel, valamint hogyan használja és védi ezeket. Az oldalunk használatával
        Ön elfogadja jelen tájékoztató feltételeit.
      </p>

      <h2>2. Milyen adatokat gyűjtünk</h2>
      <p>A következő személyes adatkategóriákat gyűjthetjük:</p>
      <ul>
        <li>
          <strong>Kapcsolattartási adatok</strong> — a neve és e-mail-címe, amelyeket önkéntesen
          megad a kapcsolatfelvételi űrlap kitöltésekor.
        </li>
        <li>
          <strong>Technikai adatok</strong> — IP-cím, böngészőtípus, eszköz, látogatott oldalak.
          Ezeket az adatokat analitikai eszközök gyűjtik automatikusan, és anonimak.
        </li>
        <li>
          <strong>Cookie-adatok</strong> — a cookie-k, amelyek használatát az{' '}
          <a href="/cookie-policy" className="text-primary hover:underline">Cookie-szabályzat</a>{' '}
          ismerteti.
        </li>
      </ul>

      <h2>3. Az adatkezelés célja</h2>
      <p>Személyes adatait kizárólag a következő célokra használjuk:</p>
      <ul>
        <li>A kapcsolatfelvételi űrlapon beérkező megkeresések feldolgozása és megválaszolása</li>
        <li>A tartalom minőségének és az oldal funkcionalitásának javítása</li>
        <li>A weboldal technikai biztonsága és megfelelő működésének biztosítása</li>
        <li>Jogszabályi kötelezettségek teljesítése</li>
      </ul>

      <h2>4. Adatok továbbítása harmadik feleknek</h2>
      <p>
        Nem értékesítjük, nem adjuk át és nem tesszük közzé személyes adatait harmadik felek
        számára, kivéve ha azt jogszabály írja elő, vagy ha az Ön által kért szolgáltatás
        nyújtásához szükséges (pl. tárhelyszolgáltatók).
      </p>

      <h2>5. Adatmegőrzési idő</h2>
      <p>
        A személyes adatokat csak addig őrizzük meg, ameddig az szükséges az összegyűjtés
        céljainak eléréséhez. A kapcsolatfelvételi űrlapon keresztül kapott adatokat az Ön
        kérésének feldolgozásához szükséges ideig tároljuk.
      </p>

      <h2>6. Az Ön jogai</h2>
      <p>A hatályos adatvédelmi jogszabályok alapján Önnek joga van:</p>
      <ul>
        <li>Hozzáférni az általunk tárolt személyes adataihoz</li>
        <li>Pontatlan vagy hiányos adatok helyesbítését kérni</li>
        <li>Személyes adatai törlését kérni („elfeledtetéshez való jog")</li>
        <li>Adatai kezelésének korlátozását vagy annak elleni tiltakozást kérni</li>
        <li>Adatait strukturált formátumban megkapni</li>
      </ul>

      <h2>7. Adatbiztonság</h2>
      <p>
        Megfelelő technikai és szervezési intézkedéseket alkalmazunk személyes adatainak védelme
        érdekében a jogosulatlan hozzáférés, közzététel, módosítás vagy megsemmisítés ellen.
      </p>

      <h2>8. A tájékoztató módosítása</h2>
      <p>
        Fenntartjuk a jogot, hogy bármikor frissítsük ezt az adatvédelmi tájékoztatót.
        Minden módosítás ezen az oldalon való közzétételével lép hatályba. A frissítés dátuma
        automatikusan kerül feltüntetésre.
      </p>

      <h2>9. Kapcsolat</h2>
      <p>
        Személyes adatok kezelésével kapcsolatos kérdéseivel forduljon hozzánk:{' '}
        <a href="mailto:info@hungarytennis.com" className="text-primary hover:underline">
          info@hungarytennis.com
        </a>
      </p>
    </PolicyLayout>
  )
}
