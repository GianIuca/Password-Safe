# Grundkonzept Passwort-Safe Lanza Projekt

## 1. Architektur:
- 2-Schichten-Architektur mit einem Frontend (React) und einem Backend (Spring Boot).
- Das Frontend dient der Benutzeroberfläche und der Kommunikation mit dem Backend, um den Benutzernamen und das Passwort gehasht an das Backend zu senden.
- Das Backend ist für die Verarbeitung von Anfragen und die Datenverwaltung zuständig.

## 2. Funktionalität:
- Anmeldefenster: Benutzer können sich über ein Login-Fenster anmelden.
- Passwort ändern: Benutzer haben die Möglichkeit, ihr Master-Passwort zu ändern.
- Passwortliste anzeigen: Nach der Authentifizierung werden die verschlüsselten Zugangsdaten entschlüsselt und angezeigt.
- Passwortliste bearbeiten: Benutzer können Einträge löschen, neue hinzufügen und bestehende bearbeiten.
- Rubriken: Die gespeicherten Zugangsdaten können in Rubriken wie "Privates", "Geschäft", "Games", "Hobbies" usw. unterteilt werden.

## 3. Sicherheitsaspekte:
- Passwörter werden nicht im Klartext gespeichert, sondern verschlüsselt (Frontend).
- Die Wahl des Verschlüsselungsverfahrens ist symmetrisch.
- Verwendung von Passwortfeldern zur Maskierung der eingegebenen Passwörter.
- Implementierung von Zugriffskontrollen, um sicherzustellen, dass Benutzer nur auf ihre eigenen Passwortlisten zugreifen können.

## 4. OWASP Top Ten Risiken:
- Broken Access Control: Implementierung von Zugriffskontrollen, um unbefugten Zugriff auf Daten zu verhindern.
- Injection: Verwendung sicherer Datenbankabfragen und Validierung von Benutzereingaben, um SQL-Injektionen zu verhindern.
- Cross-Site-Scripting: Umsetzung von Sicherheitsmaßnahmen, um Cross-Site-Scripting-Angriffe zu verhindern.
