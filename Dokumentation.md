# Weiterführende Gedanken Passwort-Safe Lanza Projekt

# Was könnten wir noch verbesser, wenn wir mehr Zeit hätten?
- Eine Datenbank anbinden, nicht alle Passwörter in einem JSON File speichern
- Passwort Zurücksetzung mit E-Mail-Adresse implementieren
- 2 Faktor Authentifizierung einbauen
- Regel, sodass man keine Skripts in die Login-Maske eingeben kann
- Nach eine gewisse Anzahl von fehlgeschlagenen Login-Versuchen (Brute-Force-Attacke) die IPs geblacklistet werden und keinen Zugriff mehr haben
- Nach eine gewisse Anzahl von fehlgeschlagenen Login-Versuchen, mit einem Usernamen, der existiert, eine Mail und den User, um den Account zu entsperren
- Registrierungsprozess ausweiten, mit E-Mail Registrierung, mit google anmelden, anderweitige Anmeldung
- Passwort stärken Prüfer einbauen, um dem User mitzuteilen, wie gut sein Passwort ist

- Monitoring von E-Mail und Passwörter, d.h. Webseiten mit geleakten Passwörtern scannen und schauen, ob von einem User etwas geleakt wurde, danach benachrichtigen
- Browser Extension für Autologin und schnelleren/einfacheren Zugriff auf die Passwörter
- Den style noch ein bisschen userfreundlich machen, sodass auch alte Leute unsere Applikation benutzen können
- Mehrere Rubriken in der Datenbank hinzufügen um links etc. hinzuzufügen

# Reflexion
Unsere Planung verlief gut, wir konnten uns in allen Punkten einigen. Das einzige Thema, bei dem wir uns nicht ganz einig waren, war die Art der Datenspeicherung. Letztendlich haben wir uns für die Speicherung in JSON entschieden. Die Erstellung des Grundkonzepts verlief reibungslos und es traten keine weiteren Komplikationen auf. Die Programmierung wurde aufgeteilt und wir haben unsere Aufgaben rechtzeitig erledigt. Allerdings funktionierte die Verbindung zwischen Frontend und Backend noch nicht und zusätzlich wurde auch noch ein Mitglied unserer Gruppe krank. Daher konnten wir die Verbindung bisher nicht reparieren. Beim nächsten Mal sollten wir etwas mehr Zeit für das Verbinden von Frontend und Backend einplanen. Aufgrund eines unerwarteten Faktors gerieten wir etwas in Verzug, was uns nicht so gut gefiel. Insgesamt war unsere Teamarbeit jedoch gut, wir haben uns über Discord abgestimmt und immer Bescheid gegeben, wenn wir Änderungen am Code vorgenommen haben.

