# Branches

## Langlebige vs kurzlebige Branches

- *Langlebige Branches*, wie `main`, `dev` und `dev-<gruppe>` bestehen von Anfang bis Ende der Gruppenarbeit und werden nur durch Merge-Requests verändert.
- *Kurzlebige Branches*, wie `dev-<name>-<feature>` und `dev-<gruppe>-<feature>` werden nur für die Entwicklung von Features erstellt und nach dem Pull-Request in `dev-<gruppe>` wieder gelöscht.

## Gruppen-Branches

- `dev-<gruppe>`
Branches wie `dev-frontend` & `dev-backend` sind für das Zusammentragen (Mergen) der Gruppenarbeit gedacht, sowie als Basis für neue Feature-Branches.

## Persönlicher Branch

- `dev-<name>`
Branches wie `dev-michael` sind eure persönlichen Bereiche, in denen ihr machen könnt was ihr wollt und dies sich nicht **nicht** zu einem Feature zuordnen lässt. Es könnten z.B. hier eure persönlichen Notizen liegen.

## Git Support

- Karim

## Ansprechpartner für Branches

| Branch | Ansprechpartner |
|:---|---:|
| `main` & `dev`| |
| `dev-frontend` | |
| `dev-backend` | |
| `dev-datenbanken` | |
| `dev-testing` | |
| `dev-ci-cd` | |
| `dev-container` | Karim|
| `dev-ansible` | |
| `dev-terraform` | |
| `dev-monitoring` | |
------

## Benutzung

### Wann erstelle ich einen neuen Branch?

- Jedes Mal wenn ihr an einem Feature arbeiten wollt.

### Wie erstelle ich einen neuen Branch?

Es stehen euch für die Namensgebung 2 Möglichkeiten zur Verfügung:

- Ihr arbeitet an einem Feature
  - alleine: --> `dev-<name>-<feature>` | `dev-michael-cloudwatch`
  - als Gruppe: --> `dev-<gruppe>-<feature>` | `dev-monitoring-cloudwatch` - Euer Gruppen-Feature Bereich

Ein neuer Branch sollte meistens von dem `dev-<gruppe>` Branch aus erstellt.
> `git checkout -b dev-<gruppe>-<feature>`

### Wann & wie schließe ich die Arbeit an einen Branch ab?

- Seid ihr fertig mit der aktuellen Version eures Features, dann erstellt einen Merge/Pull-Request in den entsprechenden `dev-<gruppe>` Branch oder pusht nach absprache mit eurem Team/den Mitbearbeitern des Features in den `dev-<gruppe>-<feature>` Branch.

------

## Tipps & Best Practices

### Commits

- **Sollten:**
  - nur die Dateien enthalten die zusammen eine Funktion/Feature ausführen
  - eine sinnvolle Commit-Message haben
- **Sollten nicht:**
  - Dateien enthalten, die an unterschiedlichen Funktionalitäten arbeiten.
  - Dateien enthalten, die nur geringfügige Änderungen haben und keine Funktionalität hinzufügen.

### DOs

- `git add file1 file2 file3`
- `git commit -m "Google-API-Daten für Social-Login als Umgebungsvariablen eingearbeitet"`

### DONTs

- `git add .`

------

## TODO/TO-Integrate

- Git Arbeitsablauf
- pull requests
