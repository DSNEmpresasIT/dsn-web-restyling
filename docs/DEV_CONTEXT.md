# Contexto de desarrollo

Este archivo centraliza el estado actual del proyecto y la forma recomendada de
trabajar con IA para que cualquier developer pueda retomar tareas, abrir hilos
para otros devs y ejecutar handoffs con contexto suficiente.

## Objetivo de este archivo

Usa este documento para responder tres preguntas rápidas: qué estado tiene el
proyecto, cómo se trabaja con IA sin perder consistencia y qué debe incluir un
handoff útil para continuidad del equipo.

## Estado actual

El sitio es una web corporativa de DSN construida con Next.js, React,
TypeScript, Tailwind CSS y Framer Motion. La estructura principal está en
`app/`, `components/` y `lib/data.ts`, con contenido base en
`docs/relevamientos/texto-web-v1.txt`.

## Fuentes de verdad

Prioriza estas fuentes para evitar desalineación entre contenido, código y
contexto operativo.

1. `lib/data.ts`: datos de proyectos, servicios y métricas usadas por la UI.
2. `docs/relevamientos/texto-web-v1.txt`: copy de negocio y relevamiento base.
3. `README.md`: setup, ejecución local y estructura general.
4. `docs/CHANGELOG.md`: historial de cambios relevantes en curso.

## Flujo recomendado con IA

Este flujo reduce retrabajo y mantiene consistencia cuando se use Copilot u
otros agentes en tareas de desarrollo y documentación.

1. Define el objetivo y el archivo destino antes de pedir generación de código.
2. Si la tarea toca `.md` o `docs/`, usa el skill `docs-writer`.
3. Si la tarea toca UI o frontend, alinea cambios con estructura existente en
   `app/` y `components/`.
4. Verifica que el cambio quedó reflejado en `docs/CHANGELOG.md` cuando aplique.
5. Cierra la tarea con un resumen breve de impacto técnico y funcional.

## Cómo abrir hilos para otros devs

Cuando delegues o abras un hilo nuevo, usa este formato para que la otra
persona arranque sin explorar todo el repo.

### Plantilla de hilo

- **Contexto:** qué problema o mejora se está resolviendo.
- **Estado actual:** qué ya se implementó y qué falta.
- **Archivos clave:** rutas concretas a revisar.
- **Criterio de aceptación:** cómo validar que está terminado.
- **Riesgos:** qué puede romperse o quedar inconsistente.

## Checklist de handoff

Antes de pasar el trabajo a otro developer, confirma estos puntos.

1. El cambio está descrito en `docs/CHANGELOG.md` si corresponde.
2. Los archivos clave y próximos pasos están explícitos en el hilo.
3. Se aclaran supuestos técnicos y decisiones no obvias.
4. Se especifica cómo probar el resultado localmente.

## Alcance de esta primera iteración

Esta base es mínima y operativa. No incluye gobernanza avanzada de IA,
automatizaciones CI para documentación ni políticas de métricas de productividad.
Se puede extender en una segunda fase si el equipo lo necesita.
