# Aspect Oriented Programming

What I write here I know nothing about.

Aspect Oriented Programming is an approach to programming developed to
alleviate a familiar pain. The same pain that drove me to make LOC. Simple
functions are slowly corrupted by the impurities of the world, checks, logging,
caching and all that. In AOP, these impurities are called *aspects*. Pure
functions (or classes) are written and then externally fit with aspects.

# Terminology

Here is a summary of AOP terminology, exapted from the documentation for
a framework that uses AOP called
[Spring](https://docs.spring.io/spring/docs/current/spring-framework-reference/html/aop.html).

 * Aspect: a modularization of a concern that cuts across multiple classes.

 * Join point: a point during the execution of a program, such as the execution
   of a method or the handling of an exception.

 * Advice: action taken by an aspect at a particular join point. Different
   types of advice include "around," "before" and "after" advice. Many AOP
   frameworks, including Spring, model an advice as an interceptor, maintaining
   a chain of interceptors around the join point.

 * Pointcut: a predicate that matches join points. Advice is associated with
   a pointcut expression and runs at any join point matched by the pointcut
   (for example, the execution of a method with a certain name). The concept of
   join points as matched by pointcut expressions is central to AOP.

 * Introduction: declaring additional methods or fields on behalf of a type.

 * Target object: object being advised by one or more aspects. Also referred to
   as the advised object.

 * AOP proxy: an object created by the AOP framework in order to implement the
   aspect contracts (advise method executions and so on).

 * Weaving: linking aspects with other application types or objects to create
   an advised object. This can be done at compile time (using the AspectJ
   compiler, for example), load time, or at runtime.

Aspects can be inserted in different ways, as specified by the `advice` type.

Here is a summary, also taken from the
[Spring documentation](https://docs.spring.io/spring/docs/current/spring-framework-reference/html/aop.html):

 * Before advice: Advice that executes before a join point, but which does not
   have the ability to prevent execution flow proceeding to the join point
   (unless it throws an exception).

 * After returning advice: Advice to be executed after a join point completes
   normally: for example, if a method returns without throwing an exception.

 * After throwing advice: Advice to be executed if a method exits by throwing
   an exception.

 * After (finally) advice: Advice to be executed regardless of the means by
   which a join point exits (normal or exceptional return). Around advice:
   Advice that surrounds a join point such as a method invocation. This is the
   most powerful kind of advice. Around advice can perform custom behavior
   before and after the method invocation. It is also responsible for choosing
   whether to proceed to the join point or to shortcut the advised method
   execution by returning its own return value or throwing an exception.

# The original paper

AOP was first introduced in 1997 by [Kiczales et al.](http://link.springer.com/chapter/10.1007/BFb0053381)
